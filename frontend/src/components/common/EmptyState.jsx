function EmptyState({

    title = "Tidak ada catatan",

    description = "Silakan tambahkan catatan baru."

}) {

    return (

        <div className="empty-state">

            <h3>{title}</h3>

            <p>{description}</p>

        </div>

    );

}

export default EmptyState;