import allHooks from "./allHooks"
/*
+------------+-----------------------------------------------------------+
|    hook    |                           data                            |
+------------+-----------------------------------------------------------+
| post:user  | {name: 'someone', 'id': 1}                                |
| post:users | [{name: 'someone2', 'id': 2}, {name: 'someone3', 'id': 3} |
+------------+-----------------------------------------------------------+
*/

export const useApi = async (hook: string, data: any = null) => {
    const baseUrl = '/api/'
    const token = useCookie("auth:token")

    const fetcher = async (endpoint: string, options: Object = {}) => {
        return await $fetch(`${baseUrl}${endpoint}`, {
            ...options,
            headers:  {
                Accept: 'application/json',
                'Authorization': `Bearer ${token.value}`,

                // 'Cache-Control': 'no-cache'
            }
        })
    }

    const get = async (endpoint: string, data: any) => {
        let url = endpoint 
        if (data) url = `${endpoint}/${data}`
        return await fetcher(url, {
            method: 'GET',
        })
    }

    const post = async (endpoint: string, data: any) => {
        return await fetcher(endpoint, {
            body: data,
            method: 'POST',
        })
    }


    /**           HOOK EXAMPLES             **\
        +-------------------+-------------+
        | hook name example | description |
        +-------------------+-------------+
        | get:users         | get data    |
        | post:user         | create data |
        +-------------------+-------------+
    \**                                      **/

    const [hookMethod, hookAction] = hook.split(':')

    const getHook = allHooks.find((h) => h.hook === hook)

    if (!getHook) return "Hook not found"

    const { endpoint } = getHook

    if (hookMethod === 'get') {
        return await get(endpoint, data)
    } else if (hookMethod === 'post') {
        return await post(endpoint, data)
    }

    return "Undefined hook method"

}