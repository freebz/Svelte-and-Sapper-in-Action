<!-- Listing 5.8 LabeledCheckboxes component in src/LabeledCheckboxes.svelte -->

<script>
  import PropTypes from 'prop-types/prop-types';
  const {arrayOf, checkPropTypes, shape, string} = PropTypes;

  const propTypes = {
    className: string,
    label: string.isRequired,
    list: arrayOf(shape({
      label: string.isRequired,
      value: string
    })).isRequired,
    selected: arrayOf(string).isRequired
  }
  checkPropTypes(propTypes, $$props, 'prop', 'LabledCheckboxes');

  ... implementation omitted ...
</script>
... implementation omitted ...
