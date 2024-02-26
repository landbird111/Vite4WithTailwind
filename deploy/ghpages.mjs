import path from 'path'
import * as gitHubPages from 'gh-pages'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const options = {
    branch: 'gh-pages',
    repo: 'https://github.com/landbird111/Vite4WithTailwind.git',
}

const callback = (err) => {
    if (err) {
        console.error(err)
    } else {
        console.log('Deploy to github Complete!')
    }
}

/**
 * This task pushes to the `master` branch of the configured `repo`.
 */
gitHubPages.publish(path.join(__dirname, '../dist'), options, callback)
