export default async function getSinglePost1(id){
    try{
        const response= await fetch(`https://blog2-6defb4hr6-k1ttus-projects.vercel.app/api/posts/${id}`, {
            cache:'no-store'
        })
        const post = await response.json();
        return post.data;
    }
    catch(err){
        console.log(err);
    }

}