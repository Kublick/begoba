const usePostUrl = ({ group }) => {
  const updateUrl = async () => {
    const backend = process.env.GATSBY_APIURL;
    const id = "7YXamvsw6hSppoy-s2ggg";
    try {
      await fetch(`${backend}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          link: group,
          site: "incrementa",
        }),
      });
      return;
    } catch (error) {
      console.log(error);
    }
  };
  updateUrl();
  return;
};

export default usePostUrl;
