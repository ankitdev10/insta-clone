import { useSelector } from "react-redux";
import "./story.scss";

const Story = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="stories">
      <div className="story">
        <img src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
        <span className="storyName">This</span>
      </div>

      <div className="story">
        <img src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
        <span className="storyName">Feature</span>
      </div>

      <div className="story">
        <img src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
        <span className="storyName">Is</span>
      </div>

      <div className="story">
        <img src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
        <span className="storyName">Available</span>
      </div>

      <div className="story">
        <img src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
        <span className="storyName">For</span>
      </div>

      <div className="story">
        <img src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
        <span className="storyName">Now</span>
      </div>
    </div>
  );
};

export default Story;
