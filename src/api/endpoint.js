const endpoints = {
    post: {
        list: '/post/list',
        create: '/post/create',
        details: (id) => `/post/details/${id}`,
        update: (id) => `/post/update/${id}`,
        delete: (id) => `/post/delete/${id}`
    }
}

export default endpoints