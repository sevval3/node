const postList = [
    { postName: "Post 1"},
    { postName: "Post 2"},
    { postName: "Post 3"},
  ];
  
  function addPost(value) {
    return new Promise((resolve, reject) => {
      if (value) {
        postList.push(value);
        resolve("********\nnew post added\n********");
      } else {
        reject("error!!!");
      }
    });
  }
  function listPost() {
    postList.map((value) => {
      console.log(value.postName,);
    });
  }
  
  async function newPostList(newPost) {
    try {
      const addStatus = await addPost(newPost);
      console.log(addStatus);
      listPost();
    } catch (err) {
      console.log(err);
    }
  }
  listPost();
  newPostList({
    postName: "Post 4"
    });