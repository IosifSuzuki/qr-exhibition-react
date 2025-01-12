const exhibitions = [
    {
        "id": 1,
        "title": "Vincent van Gogh",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Irises-Vincent_van_Gogh.jpg/2560px-Irises-Vincent_van_Gogh.jpg",
        "audio": {
            "en": "https://tonifyapp-public.s3.eu-central-1.amazonaws.com/Van+Gogh+Irises+-+English.mp3",
            "es": "https://tonifyapp-public.s3.eu-central-1.amazonaws.com/Van+Gogh+Irises+-+Spanish.mp3",
            "fr": "https://tonifyapp-public.s3.eu-central-1.amazonaws.com/Van+Gogh+Irises+-+French.mp3",
            "de": "https://tonifyapp-public.s3.eu-central-1.amazonaws.com/Van+Gogh+Irises+-+German.mp3",
        },
        "description": {
            "en": "Irises",
            "es": "Los Iris",
            "fr": "Les Iris",
            "de": "Die Iris",
        },
    },
    {
        "id": 2,
        "title": "Vincent van Gogh",
        "img": "https://www.moma.org/media/W1siZiIsIjQ2NzUxNyJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA3MCAtcmVzaXplIDgxNng1MDRcdTAwM2UiXV0.jpg?sha=b7dd189025f84117",
        "audio": {
            "en": "https://www.moma.org/d/audios/W1siZiIsIjIwMTkvMDkvMjYvMWp1bng4N3Fjdl81MjFlLm1wMyJdXQ/521e.mp3?sha=e3146a552f21bee0",
        },
        "description": {
            "en": "The Starry Night",
        }
    }
]

export function getExhibitionsByID(id) {
    return exhibitions.find((exhibition) => {
        return exhibition.id === id
    })
}

export function getExhibitionsLanguageCodesByID(id) {
    const exhibition = getExhibitionsByID(id)
    return Object.keys(exhibition.audio)
}
