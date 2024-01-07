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

    // Returns true if successful and false if failed
    async CreateNewEmail(email) {
        const URL = `http://127.0.0.1:5207/api/Email`;
        const response = await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(email)
        });

        if(!response.ok) {
            console.error('Could not create new email.')
            if(response.status === 400) { /* Bad Request */
                alert(await response.text())
            }
            return false;
        }

        return true;
    }

    async DeleteEmail(emailId) {
        const URL = `http://127.0.0.1:5207/api/Email/${emailId}`;
        const response = await fetch(URL, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if(!response.ok) {
            console.error(`Could not delete email with id = ${emailId}.`)
            if(response.status === 400) { /* Bad Request */
                alert(await response.text())
            }
        }
    }

}

export const EmailAPI = new _EmailAPI();