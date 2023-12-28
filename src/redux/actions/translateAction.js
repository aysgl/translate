import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getLanguages = createAsyncThunk("language/getLanguages", async () => {
    const options = {
        method: 'GET',
        url: 'https://text-translator2.p.rapidapi.com/getLanguages',
        headers: {
            'X-RapidAPI-Key': 'b79b373679msh4a54ef413a4c49fp12f70fjsn1540a8250428',
            'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
        }
    };
    const res = await axios.request(options);
    return res.data.data.languages;
});

export const getTranslate = createAsyncThunk("translate/getTranslate", async ({ text, sourceLang, targetLang }) => {
    const params = new URLSearchParams();
    params.set('source_language', sourceLang.value);
    params.set('target_language', targetLang.value);
    params.set('text', text);

    const options = {
        method: 'POST',
        url: 'https://text-translator2.p.rapidapi.com/translate',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': 'b79b373679msh4a54ef413a4c49fp12f70fjsn1540a8250428',
            'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
        },
        data: params,
    };

    const res = await axios.request(options);
    return res.data.data.translatedText;
});
