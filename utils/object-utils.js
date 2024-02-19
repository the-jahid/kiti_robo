import axios from "axios";


export const isObjectEmpty = (obj) => {
    return Object.keys(obj).length === 0;
}


export const deepClone = (obj) => {
    return JSON.parse(JSON.stringify(obj));
}


export const fetchUserProfile = async () => {
    const token = localStorage.getItem('jwtToken'); // get jwt token from local storage

    try {
        const response = await axios.get('http://203.190.8.197/auth/user_profile', 
            {
                headers: {
                    'Authorization': `Bearer ${token}` // send the jwt token in the header
                }
            }
        );

        localStorage.setItem('userProfile', JSON.stringify(response.data)); // save user profile in local 
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}

export const getUserProfile = () => {
    if (typeof window !== 'undefined') {
        const userProfile = localStorage.getItem('userProfile');
        return userProfile;
    }
    return null;
 }




 export const signOut = () => {
    if (typeof window !== 'undefined') {
        localStorage.removeItem('jwtToken'); // remove jwt token from local storage
        localStorage.removeItem('userProfile'); // remove user profile from local storage
        window.location.href = '/'; // redirect to the home page
    }
}



export const getSpecificUserOrders = async () => {
    const jwtToken = localStorage.getItem('jwtToken'); // get jwt token from local storage

    try {
        const response = await axios.get('http://203.190.8.197/food/submit_order', {
            headers: {
                'Authorization': `Bearer ${jwtToken}` // send jwt token in Authorization header
            }
        });
        
        return response.data; // return the response data as JSON
    } catch (error) {
        console.error(error);
    }
}