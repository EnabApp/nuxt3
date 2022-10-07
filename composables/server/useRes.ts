export default () => {
  const errRes = (err: Error) => {
    return new Response(err.message, {
      status: 400,
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }

  const sucRes = (data: any) => {
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return {
    errRes,
    sucRes,
  };
}
