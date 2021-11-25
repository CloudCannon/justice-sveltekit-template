<script context="module">
	import { loadPage } from '$lib/routing.js';

	export async function load({ fetch }) {
		return await loadPage('/contact.json', { fetch });
	}
</script>

<script>
	import { onDestroy, onMount } from 'svelte';
	import { onCloudCannonChanges, stopCloudCannonChanges } from '@cloudcannon/svelte-connector';
	import companyData from '@content/data/company.json';
	import Page from '$lib/components/Page.svelte';

	export let pageDetails;

	onMount(async () => {
   		onCloudCannonChanges((newProps) => pageDetails = newProps);
 	});

 	onDestroy(async () => {
  		stopCloudCannonChanges();
 	});

	$: postalAddress = companyData.postal_address.replace(/,/g, '<br>');
	$: address = companyData.address.replace(/,/g, '<br>');
</script>

<Page pageDetails={pageDetails}>
	<div class="columns">
		<div class="column">
			<p class="editor-link"><a href="cloudcannon:collections/content/data/company.json" class="btn"><strong>&#9998;</strong> Update Company Details</a></p>

			<label for="phone-number">Phone Number</label>
			<p id="phone-number" class="contact-info">
				<a href="tel:{companyData.phone}">{companyData.phone}</a>
			</p>

			<label for="email-address">Email Address</label>
			<p id="email-address" class="contact-info">
				<a href="mailto:{companyData.contact_email_address}">{companyData.contact_email_address}</a>
			</p>

			<label for="postal-address">Postal Address</label>
			<address id="postal-address" class="contact-info">{@html postalAddress}</address>

			<label for="address">Address</label>
			<address id="address" class="contact-info">{@html address}</address>
		</div>

		<div class="column">
			<form method="post" action="/contact-success">
				<label for="email-address">Email Address</label>
				<input id="email-address" type="text" name="email" />

				<label for="name">Name</label>
				<input id="name" type="text" name="name" />

				<label for="message">Message</label>
				<textarea id="message" name="message"></textarea>

				<input type="hidden" name="_to" value="{companyData.contact_email_address}" />
				<input type="text" name="_gotcha" style="display: none;" />

				<input type="submit" value="Send Message" />
			</form>
		</div>
	</div>
</Page>
