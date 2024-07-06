import React, { useEffect, useState } from "react";
import AdminNav from "../../../Components/nav/AdminNav";
import { getAboutsByCount } from "../../../functions/about";
import AdminAboutCard from "../../../Components/cards/AdminAboutCard";
import { removeAbout } from "../../../functions/product";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const AllAbouts = () => {
  const [abouts, setAbouts] = useState([]);
  const [loading, setLoading] = useState(false);
  // redux
  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    loadAllAbouts();
  }, []);

  const loadAllAbouts = () => {
    setLoading(true);
    getAboutsByCount(100)
      .then((res) => {
        setAbouts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  // const handleRemove = (slug) => {
  //   // let answer = window.confirm("Delete?");
  //   if (window.confirm("Delete?")) {
  //     // console.log("send delete request", slug);
  //     removeAbout(slug, user.token)
  //       .then((res) => {
  //         loadAllAbouts();
  //         toast.error(`${res.data.story} is deleted`);
  //       })
  //       .catch((err) => {
  //         if (err.response.status === 400) toast.error(err.response.data);
  //         console.log(err);
  //       });
  //   }
  // };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <AdminNav />
        </div>

        <div className="col">
          {loading ? (
            <h4 className="text-danger">Loading...</h4>
          ) : (
            <h4>Reves Boutique & Designer Studio</h4>
          )}
          <div className="row">
            {/* {abouts.map((about) => (
              <div key={about._id} className="col-md-4 pb-3"> 
                <AdminAboutCard
                  about={about}
                  // handleRemove={handleRemove}
                />
              </div>
            ))}  */}

              ABOUT US

          </div>
        </div>
      </div>
    </div>
  );
};

export default AllAbouts;
