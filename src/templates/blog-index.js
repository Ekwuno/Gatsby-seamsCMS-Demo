import React from "react"
import Layout from "../components/layout"

const BlogIndex = ({ pageContext: { blogPosts } })  => (
    <Layout>
        {blogPosts.map(blogPost =>(
            <>
                <h4>Title:{blogPost.node.content.title.value}</h4>
                
        <h4>Author:{blogPost.node.content.author.value[0].content.name.value}</h4>

                {/* <h4>Author:{blogPost?.node?.author?.value[0]?.content}</h4>  */}

                <p>{blogPost.node.content.content.value}</p> 
                <hr/>
            </>
        )) }
    </Layout>


)

export default BlogIndex