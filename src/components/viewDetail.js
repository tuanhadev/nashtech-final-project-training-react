import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function ViewDetail() {
    const [detailData, setDetailData] = useState('');
    const { id } = useParams()
    useEffect(() => {

        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response) => {
                console.log(response.data)
                setDetailData(response.data);
            })
    }, []);
    return (
        <div>
            <p>ID : {detailData.id}</p>
            <p>Title : {detailData.title}</p>
            <p>Body : {detailData.body}</p>
        </div>
    )
}
