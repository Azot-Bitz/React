import React, {useEffect, useState} from "react";
import App from "./App";

function AuthorList() {

    const [author, setAuthor] = useState([{author: 'Jack Nickolson'}, {author: 'Garold'}, {author: 'Mister Bean'}]);

    const handleChangeAuthor = (event) => {
        setAuthor(author.map((authors) => authors.author = event.target.value));
    }

    useEffect(() => {
        return () => {}
    }, [author]);

    return author.map((authorss) =>
        <>
            <div>
                <App authors={author}/>
                Author:
                <h1>{authorss.author}</h1>
            <input type='text' value={authorss.author} onChange={handleChangeAuthor}/>
        </div>
        </>

    );
}

export default AuthorList;