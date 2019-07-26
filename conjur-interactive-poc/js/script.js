$(function() {
    $("#conjur-version").on("input", function(){
        // Print entered value in a div box
        var text="docker load -i conjur-appliance-" + $(this).val() + ".tar.gz\ndocker load -i cli5.tar.gz";
        $("#code-load-images").text(text);
    });

    $("#docker-data-dir").on("input", function(){
        // Print entered value in a div box
        var text='/etc/docker/daemon.json:\n{\n  \"data-root\": \"' + $(this).val() + '\",\n  \"log-driver\": \"journald\"\n}';
        $("#code-daemon-json").text(text);
    });
});
