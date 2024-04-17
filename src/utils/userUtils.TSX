const fetchUserDetails = async (sessionToken) => {
  try {
    const response = await fetch(`${baseUrl}`);

    
    if (!response.ok) {
      throw new Error('Failed to fetch user details');
    }

    const user = await response.json();
console.log(response)
    if (!user) {
      throw new Error('User not found');
    }

    console.log('User details:', user);
    return user;
  } catch (error) {
    console.error('Error fetching user details:', error.message);
    throw error;
  }
};
