import {join as joinPath} from 'path'
import {readFileSync} from 'fs'

import boxen from 'boxen'

const borderStyle = 'classic'

const say = string => {
  const parrot = readFileSync(joinPath(__dirname, 'default-parrot.txt'), 'utf-8')
  return boxen(string, {borderStyle}) + parrot
}

export default say
