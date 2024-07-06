import axios from "axios"

export const createAbout =async(about, authtoken) =>
await axios.post(`${process.env.REACT_APP_API}/aboutus`, about, {
    headers:{
        authtoken,
    },
});

export const getAboutsByCount = async (count) =>
  await axios.get(`${process.env.REACT_APP_API}/aboutus/${count}`);

  export const removeAbout = async (slug, authtoken) =>
  await axios.delete(`${process.env.REACT_APP_API}/aboutus/${slug}`, {
    headers: {
      authtoken,
    },
  });


export const getAbout =async(slug) =>
await axios.get(`${process.env.REACT_APP_API}/aboutus/${slug}`);

export const getAbouts = async (sort, order, page) =>
  await axios.post(`${process.env.REACT_APP_API}/aboutus`, {
    sort,
    order,
    page,
  });



export const getAboutsCount = async () =>
  await axios.get(`${process.env.REACT_APP_API}/aboutus/total`);
