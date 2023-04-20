const { format } = require('date-fns')
const { v4 : uuid } = require('uuid')

console.log(format(new Date(), 'yyyy\tMM\tdd\tHH:mm:ss'));

console.log(uuid());

// we can update the packages by the command {npm update}

// we can remove any package by the command { npm rm or npm un or npm uninstall }

// note that when we remove any package it do not change it in scripts, although we can change it manually

