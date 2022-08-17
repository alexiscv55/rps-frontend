import { environment } from "src/environments/environment";
import { Link } from "../types/link.interface";

export const FOOTER_LINKS: Link[] = [
    {
        url: 'https://github.com/alexiscv55/rps-frontend',
        title: 'GitHub'
    },
    {
        url: environment.API_BASE_PATH + '/swagger-ui.html',
        title: 'API docs'
    },
    {
        url: 'https://github.com/alexiscv55/rps-backend',
        title: 'API GitHub'
    }
]