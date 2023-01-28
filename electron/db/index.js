const fs = require('fs');
const path = require('path');

exports.retrieveRoutes = () => {

    return new Promise((resolve, reject) => {
        fs.readFile(path.join(__dirname, 'routes.json'), { encoding: 'utf8' }, (err, data) => {
            if (err) {
                reject(err);
            } else {

                try {
                    resolve(JSON.parse(data));
                } catch (err) {
                    reject(err);
                }

            }
        })
    })

}

exports.retrieveVehicles = () => {

    return new Promise((resolve, reject) => {
        fs.readFile(path.join(__dirname, 'vehicles.json'), { encoding: 'utf8' }, (err, data) => {
            if (err) {
                reject(err);
            } else {

                try {
                    resolve(JSON.parse(data));
                } catch (err) {
                    reject(err);
                }

            }
        })
    })

}

exports.saveRoutes = (data) => {

    return new Promise((resolve, reject) => {

        try {

            fs.writeFile(path.join(__dirname, 'routes.json'), JSON.stringify(data), (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            })

        } catch (err) {
            reject(err);
        }

    })

}

exports.saveVehicles = (data) => {

    return new Promise((resolve, reject) => {

        try {

            fs.writeFile(path.join(__dirname, 'vehicles.json'), JSON.stringify(data), (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            })

        } catch (err) {
            reject(err);
        }

    })

}