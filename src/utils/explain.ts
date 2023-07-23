import axios from "axios";

const explain = async (code: string) => {
  try {
    const response = await axios.request({
      url: "https://free.churchless.tech/v1/chat/completions",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: `Explain this code to me in only markdown format wihtout telling me 
            what language it is etc. just how code works and it needs to be as short as posible: ${code}`,
          },
        ],
      },
    });

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default explain;
