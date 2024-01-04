const DashboardPage = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <form action="">
                <input type="text" name="title" id="title" />
                <input type="text" name="description" id="description" />
                <input type="submit" value="add" />
            </form>
        </div>
    );
};

export default DashboardPage;