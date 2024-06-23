import axios from 'axios'

export const baseURL = 'http://localhost:3001/'

const apiInstance = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json'
    },
})
export const loginUser = async () => await apiInstance.get('oauth2/authorization/discord')
// export const loginUser = async () => await axios.get('https://discord.com/api/oauth2/authorize?response_type=code&client_id=1085479596297818144&scope=email identify&state=PsKHscobUY-r9_alHsdh6Wi2E88cD99nAuBMN5U5kbc=&redirect_uri=http://localhost:3001/api/auth/redirect')