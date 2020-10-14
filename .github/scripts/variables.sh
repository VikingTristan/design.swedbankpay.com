#!/bin/bash
set -o errexit # Abort if any command fails
me=$(basename "$0")

help_message="\
Generates variables based on the provided brand and ref arguments.

Usage:
    $me --brand <brand> [--ref <ref>]
    $me --help
Arguments:
    -h, --help              Displays this help screen.
    -b, --brand <brand>     The name of the brand to generate variables for.
    -r, --ref <ref>         The Git ref being built."

initialize() {
    while : ; do
        if [[ $1 = "-h" || $1 = "--help" ]]; then
            echo "$help_message"
            return 0
        elif [[ ( $1 = "-b" || $1 = "--brand" ) && -n $2 ]]; then
            brand=$2
            shift 2
        elif [[ ( $1 = "-r" || $1 = "--ref" ) && -n $2 ]]; then
            ref=$2
            shift 2
        else
            break
        fi
    done

    if [[ -z "$brand" ]]; then
        echo "No brand specified." >&2
        echo "$help_message"
        return 1
    fi
}

generate_variables() {
    if [[ "$ref" == refs/tags/* ]]; then
        # Override GitVersion's version on tags, just to be sure.
        version="${ref#refs/tags/}"
        echo "::set-output name=VERSION::$version"
    fi

    echo "Ref:      $ref"
    echo "Version:  $version"
    echo "Brand:    $brand"

    if [ "$brand" == "payex" ]; then
        echo ::set-output name=BRAND_NAME::PayEx
        echo ::set-output name=BRAND_URL::https://payexdesignguidetest.z6.web.core.windows.net
        echo ::set-output name=AZURE_ACCOUNT::payexdesignguidetest
        echo ::set-output name=BUILD_SCRIPT::build:prod:payex
    elif [ "$brand" == "swedbankpay" ]; then
        echo ::set-output name=BRAND_NAME::SwedbankPay
        echo ::set-output name=BRAND_URL::https://swedpaydesignguidetest.z6.web.core.windows.net
        echo ::set-output name=AZURE_ACCOUNT::swedpaydesignguidetest
        echo ::set-output name=BUILD_SCRIPT::build:prod
    else
        echo "Unknown brand '$brand'!"
        return 1
    fi
}

main() {
    initialize "$@"
    generate_variables
}

main "$@"
