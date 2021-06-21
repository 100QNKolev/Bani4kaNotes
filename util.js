import moment from 'moment';

export function formatDate(dateString) {
    const parsed = moment(new Date(dateString));

    if(!parsed.isValid()) { 
        return Date.now();
    }

    return parsed.format('DD/MM/YY HH:mm');
}

export function getCountdownParts(noteDate) {
    const duration = moment.duration(
        moment(new Date(noteDate)) 
        .diff( 
            new Date() 
        )
    );
    return {
        days: parseInt(duration.as('days')),
        hours: duration.get('hours'),
        minutes: duration.get('minutes'),
        seconds: duration.get('seconds')
    };
}