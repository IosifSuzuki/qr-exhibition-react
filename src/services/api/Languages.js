const languages = [
    {
        "name": "English",
        "code": "en",
    },
    {
        "name": "Spanish",
        "code": "es",
    },
    {
        "name": "French",
        "code": "fr",
    },
    {
        "name": "German",
        "code": "de",
    },
]

export function fetchAllLanguages() {
    return languages
}

export function fetchLanguagesWithCodes(codes) {
    return languages.filter(({code}) => {
        return codes.includes(code)
    })
}

