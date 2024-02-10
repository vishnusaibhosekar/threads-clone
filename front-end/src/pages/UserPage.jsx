import UserHeader from "../components/UserHeader";
import UserPost from "../components/userPost";

const UserPage = () => {
  return (
    <>
      <UserHeader />
      <UserPost
        likes={500}
        replies={320}
        postImg="/post1.png"
        postTitle="Let's talk about Threads."
      />
      <UserPost likes={240} replies={150} postTitle="Test Post :)" />
      <UserPost
        likes={160}
        replies={120}
        postImg="/post3.png"
        postTitle="Love this guy!"
      />
      <UserPost
        likes={780}
        replies={520}
        postTitle="This is my First Thread."
      />
    </>
  );
};

export default UserPage;
