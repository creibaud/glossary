type Term = {
    _id: string;
    term: string;
    meaning: string;
    links: [string]
};

const DashboardPage = async () => {
    const res = await fetch("http://localhost:3000/api/terms", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        cache: "no-cache"
    });
    const terms: Term[] = await res.json();

    return (
        <div>
            <h1>Dashboard</h1>
            <ul>
                {terms.map((term) => (
                    <li key={term._id}>
                        <h2>{term.term}</h2>
                        <p>{term.meaning}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DashboardPage;