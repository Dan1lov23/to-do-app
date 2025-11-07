const validatePassword = (password: string, repeatPassword: string) => {
    if (password !== repeatPassword) {
        return "Пароли не совпадают";
    }

    const upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "{", "}", "[", "]", "|", "\\", ":", ";", "\"", "'", "<", ">", ",", ".", "?", "/"];
    const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    const upperCaseLetterCheck = (password: any) => {
        for (let a = 0; a < password.length; a++) {
            if (upperCaseLetters.includes(password[a])) {
                return true;
            }
        }
        return false;
    };

    const lowerCaseLetterCheck = (password: any) => {
        for (let a = 0; a < password.length; a++) {
            if (lowerCaseLetters.includes(password[a])) {
                return true;
            }
        }
        return false;
    };

    const numberCheck = (password: any) => {
        for (let a = 0; a < password.length; a++) {
            if (numbers.includes(password[a])) {
                return true;
            }
        }
        return false;
    };

    const symbolCheck = (password: any) => {
        for (let a = 0; a < password.length; a++) {
            if (symbols.includes(password[a])) {
                return true;
            }
        }
        return false;
    };

    if (!upperCaseLetterCheck(password)) {
        return 'Пароль должен содержать заглавную букву';
    }
    if (!lowerCaseLetterCheck(password)) {
        return 'Пароль должен содержать строчную букву';
    }
    if (!numberCheck(password)) {
        return 'Пароль должен содержать число';
    }
    if (!symbolCheck(password)) {
        return 'Пароль должен содержать специальный символ';
    }
    if (password.length < 5) {
        return "Пароль должен быть не менее 5 символов";
    }
    return "";
}

export default validatePassword;