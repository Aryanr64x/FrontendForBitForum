const Home = () => {
    const posts = [
        {
            title: "First Post",
            body: "This is the body",

        },
        {
            title: "Second Post",
            body: "This is the body of second ",
        }
    ]

    return (
        <div>
            {
                posts.map((post) => {
                    return (
                        <div>
                            
                        </div>
                    )
                })
            }

        </div>
    );

}

export default Home;

