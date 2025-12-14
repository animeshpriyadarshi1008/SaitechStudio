#!/bin/bash

# Route 53 Migration Script
# Replace these variables with your actual values
SOURCE_ZONE_ID="Z123456789"
DOMAIN_NAME="example.com"
ACCOUNT_A_PROFILE="accountA"
ACCOUNT_B_PROFILE="accountB"

# Create hosted zone in Account B
echo "Creating hosted zone in Account B..."
NEW_ZONE_ID=$(aws route53 create-hosted-zone --name $DOMAIN_NAME --caller-reference $(date +%s) --profile $ACCOUNT_B_PROFILE --query 'HostedZone.Id' --output text)
echo "New Zone ID: $NEW_ZONE_ID"

# Direct migration without JSON files
echo "Migrating records..."
aws route53 list-resource-record-sets --hosted-zone-id $SOURCE_ZONE_ID --profile $ACCOUNT_A_PROFILE --query 'ResourceRecordSets[?Type!=`NS` && Type!=`SOA`]' | jq '{Changes: [.[] | {Action: "CREATE", ResourceRecordSet: .}]}' | aws route53 change-resource-record-sets --hosted-zone-id $NEW_ZONE_ID --change-batch file:///dev/stdin --profile $ACCOUNT_B_PROFILE

# Display new name servers
echo "New name servers:"
aws route53 get-hosted-zone --id $NEW_ZONE_ID --profile $ACCOUNT_B_PROFILE --query 'DelegationSet.NameServers' --output table

echo "Migration complete - no JSON files created!"