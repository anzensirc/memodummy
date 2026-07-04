import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Header from "../components/layout/Header";
import Button from "../components/common/Button";
import Loading from "../components/common/Loading";
import EmptyState from "../components/common/EmptyState";
import ConfirmDialog from "../components/common/ConfirmDialog";
import NoteCard from "../components/notes/NoteCard";

import useNotes from "../hooks/useNote";

import "../styles/dashboard.css";

function Dashboard() {

    const {
        getAll,
        remove
    } = useNotes();

    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);

    const [dialogOpen, setDialogOpen] = useState(false);
    const [selectedNote, setSelectedNote] = useState(null);

    async function loadNotes() {

        setLoading(true);

        try {

            const data = await getAll();

            setNotes(data);

        } catch (err) {

            console.error(err);

        }

        setLoading(false);

    }

    useEffect(() => {

        loadNotes();

    }, []);

    function handleDelete(note) {

        setSelectedNote(note);

        setDialogOpen(true);

    }

    async function confirmDelete() {

        await remove(selectedNote.id);

        setDialogOpen(false);

        setSelectedNote(null);

        loadNotes();

    }

    return (

        <>

            <Header />

            <div className="dashboard">

                <div className="dashboard-top">

                    <Link to="/new">

                        <Button>

                            + Catatan Baru

                        </Button>

                    </Link>

                </div>

                {

                    loading ?

                        <Loading />

                        :

                        notes.length === 0 ?

                            <EmptyState />

                            :

                            notes.map(note => (

                                <NoteCard
                                    key={note.id}
                                    note={note}
                                    onDelete={handleDelete}
                                />

                            ))

                }

            </div>

            <ConfirmDialog

                open={dialogOpen}

                title="Hapus Catatan"

                message="Apakah Anda yakin?"

                onCancel={() => setDialogOpen(false)}

                onConfirm={confirmDelete}

            />

        </>

    );

}

export default Dashboard;