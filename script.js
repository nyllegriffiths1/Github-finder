async function fetchGitHubProfile(){
    const username = document.getElementById('username').ariaValueMax;

    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const userData = await response.json();

        document.getElementById('profile-image').src = userData.avatar_url;
        document.getElementById('profile-name').innerText = `Name: ${userData.name || 'N/A'}`;
        document.getElementById('profile-bio').innerText = `Bio: ${userData.bio || 'N/A'}`;
        document.getElementById('profile-repos').innerText = `Public Repositories: ${userData.public_repos}`;

    } catch (error) {
        console.log('Error fetching GitHub profile:', error.message);
        alert('Error fetching GitHub profile. Please check the username and try again.');
    }
}