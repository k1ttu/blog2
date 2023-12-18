export default async function getPosts1(){
    try{
        const response = await fetch("https://blog2-6defb4hr6-k1ttus-projects.vercel.app/api/posts",
        {
            cache:'no-store'
        }
        );
        const post = await response.json();
        return post.data;
    }
    catch(err){
        console.log(err);
    }
}