import { Router, Request, Response } from "express"
import { ROLES } from "../utils/roles"

const bookRouter = Router()

interface IResponse {
    success: boolean
    message: string
    data?: any
}

interface AuthRequest extends Request {
    role?: string
}

bookRouter.get("/a", (req: AuthRequest, res: Response) => {

    const allowedRoles = [ROLES.admin, ROLES.creator]

    if (!allowedRoles.includes(req.role || "")) {
        return res.status(401).json({
            success: false,
            message: "Unauthorized"
        })
    }

    return res.status(200).json({
        success: true,
        message: "Access granted"
    })
})

export default bookRouter