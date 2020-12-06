let
  pkgs = import <nixpkgs> {};
in
pkgs.mkShell {
  buildInputs = [
    pkgs.nodejs-12_x
    pkgs.yarn
  ];

  shellHook = ''
    export PATH=${toString ./.}/node_modules/.bin:$PATH
  '';
}
