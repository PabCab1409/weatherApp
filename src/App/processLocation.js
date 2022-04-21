const processLocation = () => {
  var autocomplete = new google.maps.places.Autocomplete(
    document.getElementById("inputLocation"),
    {
      types: ["establishment"],
      componentRestrictions: { country: ["AU"] },
      fields: ["place_id", "geometry", "name"],
    }
  );
};

export default processLocation;
