#!/bin/bash

# Export Route 53 zone to BIND zone file format
SOURCE_ZONE_ID="Z010059218QML2V0R1JR1"
ACCOUNT_A_PROFILE="accountA"

# Export to zone file
echo "Exporting zone to BIND format..."
aws route53 list-resource-record-sets --hosted-zone-id $SOURCE_ZONE_ID --profile $ACCOUNT_A_PROFILE --output text --query 'ResourceRecordSets[*].[Name,Type,TTL,ResourceRecords[0].Value]' > zone.txt

# Or export as JSON
echo "Exporting zone as JSON..."
aws route53 list-resource-record-sets --hosted-zone-id $SOURCE_ZONE_ID --profile $ACCOUNT_A_PROFILE > zone.json

echo "Files created: zone.txt and zone.json"