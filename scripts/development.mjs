import { readdir } from 'fs/promises'
import { execSync } from 'child_process'

const getDirectories = async source =>
  (await readdir(source, { withFileTypes: true }))
    .filter(dirent => dirent.isDirectory())
    .map(dirent => `${source}/${dirent.name}/`)

const modulesPaths = await getDirectories('./modules')

modulesPaths.forEach(async modulePath => {
  execSync(`cd ${modulePath} && git pull && yarn install && yarn dev:prepare`, { stdio: 'inherit' })
})

execSync('yarn nuxt dev', { stdio: 'inherit' })