export default {
    formatCurrency: function(num) {        
        return 'SEK '+ Number(num.toFixed(2).toLocaleString())+ ' ';
    }
}