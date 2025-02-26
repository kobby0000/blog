const {Router} = require('express')

const {createPost, getPost, getPosts, getCatPost, getUserPosts,editPost,deletePost} = require('../controllers/postControllers.js')
const authMiddleware = require('../middleware/authMiddleware.js')
const router = Router()

router.post('/',authMiddleware, createPost)
router.get('/', getPosts)
router.get('/:id', getPost)
router.get('/categories/:category', getCatPost)
router.get('/users/:id', getUserPosts)
router.patch('/:id',authMiddleware, editPost)
router.delete('/:id',authMiddleware, deletePost)

module.exports = router