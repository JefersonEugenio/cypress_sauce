class OverviewElement {

    finish = () => { return '#finish' }
    cancel = () => { return '#cancel' }

    title = () => { return '.title' }
    message = () => { return '.complete-header' }
    backHome = () => { return '#back-to-products'}

    product = () => { return '.inventory_item_name'}
    itemTotal = () => { return '.summary_subtotal_label'}
    taxa = () => { return '.summary_tax_label'}
    total = () => { return '.summary_total_label'}

} export default OverviewElement