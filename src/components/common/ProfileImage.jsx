import useAuth from "../../hook/useAuth";
import useProfile from "../../hook/useProfile";

function ProfileImage() {
  const { auth } = useAuth();
  const { state } = useProfile();
  const user = state?.user ?? auth.user;

  return (
    <>
      {" "}
      <img
        src={user.profile_picture_url}
        alt={user.name}
        className="size-8 rounded-full"
      />
    </>
  );
}

export default ProfileImage;
