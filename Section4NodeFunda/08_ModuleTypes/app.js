//native module or core module
import fs from 'node:fs'
import net from 'node:net'
import dgram from 'node:dgram'
import http  from 'node:http'
import https  from 'node:https'
import { ChildProcess } from 'node:child_process'
import cluster from "cluster"
import zlib from "zlib"
import worker_threads from 'node:worker_threads'
import crypto from 'node:crypto'


import { log, dir} from 'node:console'

//user Module
import {num} from "./math.js"


//npm Module
import axios from 'axios'