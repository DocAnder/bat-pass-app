
export default function generatePassword(){
    let password: string = '';
    let characters: string = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvXxWwYyZz1234567890!$%&*#';

    for (let i = 0; i < 12; i++) {
        password += characters.charAt(
            Math.floor(Math.random() * characters.length)
        )        
    }

    return password;
}