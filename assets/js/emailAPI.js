class _EmailAPI {

    async GetAllEmails() {
        const URL = `http://127.0.0.1:5207/api/Email`;
        const response = await fetch(URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if(!response.ok) {
            console.error('Could not get emails from the API!')
            return null;
        }

        return response.json();
    }

}

export const EmailAPI = new _EmailAPI();