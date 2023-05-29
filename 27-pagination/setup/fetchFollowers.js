const url = 'https://api.github.com/users/john-smilga/followers?per_page=100';

const fetchFollowers = async () => {
  try {
    const response = await fetch(url);
    const data = response.json();
    return data;
  } catch (error) {
    alert(`There was an error ${error}`);
    console.log(error);
  }
};

export default fetchFollowers;
