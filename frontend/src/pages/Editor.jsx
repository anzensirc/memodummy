import { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

import Header from "../components/layout/Header";

import Loading from "../components/common/Loading";

import NoteForm from "../components/notes/NoteForm";

import useNotes from "../hooks/useNote";

import "../styles/editor.css";

function Editor() {

    const { id } = useParams();

    const navigate = useNavigate();

    const {
        getById,
        create,
        update
    } = useNotes();

    const [note, setNote] = useState(null);

    const [loading, setLoading] = useState(false);

    useEffect(() => {

        if (!id) return;

        async function loadNote() {

            setLoading(true);

            const data = await getById(id);

            setNote(data);

            setLoading(false);

        }

        loadNote();

    }, [id]);

    async function handleSubmit(data) {

        setLoading(true);

        if (id) {

            await update(id, data);

        } else {

            await create(data);

        }

        setLoading(false);

        navigate("/");

    }

    return (

        <>

            <Header />

            <div className="editor">

                {

                    loading && id ?

                        <Loading />

                        :

                        <NoteForm

                            initialData={note}

                            loading={loading}

                            onSubmit={handleSubmit}

                        />

                }

            </div>

        </>

    );

}

export default Editor;